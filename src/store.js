import { types, destroy, getParent } from "mobx-state-tree";
import { calculateTimeDifference } from "./js/utils/timeUtil";
import { type } from "os";
import api from "./services/api";

export const GameSchedule = types
  .model("gameSchedule", {
    betType: types.optional(types.string, ""),
    upcoming: types.optional(types.frozen()),
    results: types.optional(types.frozen())
  })
  .actions(self => ({
    add(response) {
      self.betType = response.betType;
      self.upcoming = response.upcoming;
      self.results = response.results;
    },
    fetch(serchTerm) {
      try {
        api("products/" + serchTerm).then(response => {
          self.add(response);
        });
      } catch (err) {}
    }
  }));

export const GameSchedules = types
  .model("gameSchedules", {
    schedules: types.array(GameSchedule)
  })
  .actions(self => ({
    add(response) {
      self.schedules.push({
        betType: response.betType,
        upcoming: response.upcoming,
        results: response.results
      });
    },
    fetch(serchTerm) {
      try {
        api("products/" + serchTerm).then(response => {
          self.add(response);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }));
export const GameData = types
  .model("gameData", {
    gameScheduleId: types.optional(types.string, ""),
    data: types.optional(types.frozen())
  })
  .actions(self => ({
    add(gameScheduleId, data) {
      (self.gameScheduleId = gameScheduleId), (self.data = data);
    },
    fetch(gameId) {
      try {
        api("games/" + gameId).then(response => {
          self.add(gameId, response);
        });
      } catch (err) {
        console.log(err);
      }
    },
    remove() {
      getParent(self, 2).remove(self);
    }
  }))
  .views(self => ({
    get getRaces() {
      console.log(self ? self.data : "ingen", "data in store");
      return self.data ? self.data.races : null;
    }
  }));

const rootStore = types.model("rootStore", {
  gameSchedules: types.optional(GameSchedules, {}),
  gameData: types.optional(GameData, {}),
  gameSchedule: types.optional(GameSchedule, {})
});

export default rootStore;
