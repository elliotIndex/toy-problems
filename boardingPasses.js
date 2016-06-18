const tickets = [
  { from: 'a', to: 'l'},
  { from: 'f', to: 'g'},
  { from: 'g', to: 'y'},
  { from: 'e', to: 'a'},
  { from: 'w', to: 'z'},
  { from: 'k', to: 'h'},
  { from: 'l', to: 'f'},
  { from: 'y', to: 'k'},
  { from: 'h', to: 'w'},
];

function boardingPasses(tickets) {
  return tickets.reduce((route, ticket) => {
    if (route.has(ticket.to)) {
      route.delete(ticket.to);
    } else {
      route.set(ticket.to, 'final destination');
    }
    if (route.has(ticket.from)) {
      route.delete(ticket.from);
    } else {
      route.set(ticket.from, 'initial departure');
    }
    return route;
  }, new Map());
};

console.log(boardingPasses(tickets));
