const sql = require("../../db/connection/sql");

const generateSchduleModel = () => ({
  queries: {
    // Get All schedules which are Registered
    findAllSchedules: async () => {
      try {
        sql.query("SELECT * FROM schedules", (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          console.log("schedules: ", res);
          return res;
        });
      } catch (error) {
        return {
          msg: "Unauthrorized",
        };
      }
    },
  },
  mutations: {
    // Create a new Schedule
    addSchedule: async (newSchedule) => {
      try {
        sql.query("INSERT INTO schedules SET ?", newSchedule, (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          console.log("created Schedule success ");
          return res;
        });
      } catch (error) {
        console.log("Unauthorized");
        throw new Error(error);
      }
    },

    // Delete an Existing Schedule
    deleteSchedule: (id) => {
      try {
        sql.query("DELETE FROM schedules WHERE id = ?", id, (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          if (res.affectedRows == 0) {
            // not found Schedule with the id
            return { msg: "No user found" };
          }

          console.log("deleted Schedule with id: ", id);
          return res;
        });
      } catch (error) {
        console.log("Unauthorized");
        throw new Error(error);
      }
    },

    // Find an existing Schedule
    findSchedule: (id) => {
      try {
        sql.query(`SELECT * FROM schedules WHERE id = ${id}`, (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          if (res.length) {
            console.log("found Schedule: ", res[0]);
            return res[0];
          }

          // Not found Schedule with the id
          return { msg: "User not found" };
        });
      } catch (error) {
        console.log("Unauthorized");
        throw new Error(error);
      }
    },
  },
});

module.exports = generateSchduleModel;
