function parseCommand(command) {
  if (command.split(' ').length > 1)
    return command.split(' ')[0];
  return command;
};

export { parseCommand };