const resolvers = {
  Query: {
    findAllSchedules: async (_, args, context) =>
      await context.models.schedule.queries.findAllSchedules(),
  },
  Mutation: {
    addSchedule: async (_, args, context) =>
      await context.models.schedule.mutations.addSchedule(
        JSON.parse(JSON.stringify(args.newSchedule))
      ),
    deleteSchedule: async (_, args, context) =>
      await context.models.schedule.mutations.deleteSchedule(
        JSON.parse(JSON.stringify(args.id))
      ),
    findSchedule: async (_, args, context) =>
      await context.models.scheduleModel.mutations.findSchedule(
        JSON.parse(JSON.stringify(args.id))
      ),
  },
};

module.exports = resolvers;
