const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Schedule {
    id: ID
    note: String
    startTime: DateTime
    endTime: DateTime
    active: Boolean
  }

  input ScheduleInput {
    note: String
    startTime: DateTime
    endTime: DateTime
    active: Boolean
  }

  type Query {
    findAllSchedules: [Schedule]
  }

  type Mutation {
    addSchedule(newSchedule: ScheduleInput): Schedule
    deleteSchedule(id: ID!): Schedule
    findSchedule(id: ID!): Schedule
  }
`;

module.exports = typeDefs;
