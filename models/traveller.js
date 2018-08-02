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

// In below method 'Set' creates a new array, but will delete any duplications from origional.
Traveller.prototype.getUniqueModesOfTransport = function (transport) {
  return Array.from(new Set(this.getModesOfTransport()));
};

// Below is a 2nd method for getting unique modes of transport
Traveller.prototype.getUniqueModesOfTransport2 = function () {
  return this.journeys.reduce((uniqueTransport, journey) => {
    if(!uniqueTransport.includes(journey.transport)){
      uniqueTransport.push(journey.transport);
    }
    return uniqueTransport;
  }, []);
};

module.exports = Traveller;
