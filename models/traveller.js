const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};


Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getModesOfTransport = function () {
return this.journeys.map(journey => journey.transport)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let journeyDistance = this.journeys.map(journey => journey.distance);
  return journeyDistance.reduce((total, journey) => {
    return total + journey;
  });
};

Traveller.prototype.getUniqueModesOfTransport = function (transport) {
  return Array.from(new Set(this.getModesOfTransport()));
};


module.exports = Traveller;
