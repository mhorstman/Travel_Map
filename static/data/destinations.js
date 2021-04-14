var travelDesinations = [
    {country: 'Argentina', cities: [ {name: 'Buenos Aries', lat: -34.58917, lng: -58.39897},
          {name: 'Iguazu', lat: -25.70114, lng: -54.45131}]},
     {country: 'Canada', cities: [ {name: 'Toronto', lat: 43.67818, lng: -79.3369},
          {name: 'Montreal', lat: 45.53846, lng: -73.75231},
          {name: 'Vancouver', lat: 49.25989, lng: -123.10743}]},
     {country: 'Australia', cities: [ {name: 'Melbourne', lat: -37.80649, lng: 145.03646},
          {name: 'Sydney', lat: -33.8445, lng: 151.2052},
          {name: 'Port Douglas', lat: -16.48524, lng: 145.46448}]},
     {country: 'The Bahamas', cities: [ {name: 'Andros Town', lat: 24.70706, lng: -77.77273},
          {name: 'Nassau', lat: 25.06484, lng: -77.39062}]},
     {country: 'Cayman Islands', cities: [ {name: 'George Town', lat: 19.29978, lng: -81.37704}]},
     {country: 'Cech Republic', cities: [ {name: 'Prague', lat: 50.09282, lng: 14.43949}]},
     {country: 'Colombia', cities: [ {name: 'Cartagena', lat: 10.40289, lng: -75.50921}]},
     {country: 'Costa Rica', cities: [ {name: 'San Jose', lat: 9.92978, lng: -84.10682},
          {name: 'Quepos', lat: 9.42725, lng: -84.15779},
          {name: 'Monteverde', lat: 10.27787, lng: -84.84718}]},
     {country: 'Croatia', cities: [ {name: 'Zagreb', lat: 45.80709, lng: 15.99247},
          {name: 'Split', lat: 43.51148, lng: 16.44496},
          {name: 'Dubrovnik', lat: 42.6465, lng: 18.08855},
          {name: 'Hvar', lat: 43.18862, lng: 16.49767},
          {name: 'Korcula', lat: 42.92975, lng: 16.88768}]},
     {country: 'Denmark', cities: [ {name: 'Copenhagen', lat: 55.68241, lng: 12.58694}]},
     {country: 'Egypt', cities: [ {name: 'Cairo', lat: 30.02291, lng: 31.20833}]},
     {country: 'Germany', cities: [ {name: 'Hamburg', lat: 53.5109, lng: 9.99919},
          {name: 'Munich', lat: 48.14795, lng: 11.55212},
          {name: 'Cologne', lat: 50.94438, lng: 6.97552},
          {name: 'Schleswig', lat: 54.52763, lng: 9.55845}]},
     {country: 'Greece', cities: [ {name: 'Santorini', lat: 36.41912, lng: 25.43184},
          {name: 'Mykonos', lat: 37.44786, lng: 25.33146},
          {name: 'Rhodes', lat: 36.4432, lng: 28.22685}]},
     {country: 'Haiti', cities: [ {name: 'Labadee', lat: 19.77228, lng: -72.24541}]},
     {country: 'Hong Kong', cities: [ {name: 'Hong Kong ', lat: 22.27498, lng: 114.18669}]},
     {country: 'Ireland', cities: [ {name: 'Dublin', lat: 53.35211, lng: -6.23816}]},
     {country: 'Italy', cities: [ {name: 'Rome', lat: 41.89543, lng: 12.48726},
          {name: 'Venice', lat: 45.43863, lng: 12.32929},
          {name: 'Praino', lat: 40.60996, lng: 14.53276}]},
     {country: 'Japan', cities: [ {name: 'Tokyo', lat: 35.66138, lng: 139.70361}]},
     {country: 'Jamaica', cities: [ {name: 'Montego Bay', lat: 18.4721, lng: -77.92092}]},
     {country: 'Mexico', cities: [ {name: 'Cozumel', lat: 20.5101, lng: -86.94786},
          {name: 'Playa del Carmen', lat: 20.64092, lng: -87.07376},
          {name: 'Tijuana', lat: 32.52794, lng: -117.03296},
          {name: 'Los Cabos', lat: 22.97560, lng: -109.79561}]},
     {country: 'Netherlands', cities: [ {name: 'Amsterdam', lat: 52.37848, lng: 4.89777}]},
     {country: 'Portugal', cities: [ {name: 'Lisbon', lat: 38.71012, lng: -9.13068}]},
     {country: 'Spain', cities: [ {name: 'Madrid', lat: 40.41617, lng: -3.70364},
          {name: 'Barcelona', lat: 41.38749, lng: 2.18308}]},
     {country: 'Sint Maarten', cities: [ {name: 'Philipsburg', lat: 18.02412, lng: -63.04725}]},
     {country: 'Sweden', cities: [ {name: 'Stockholm', lat: 59.32777, lng: 18.05138}]},
     {country: 'Switzerland', cities: [ {name: 'Zurich', lat: 47.36755, lng: 8.54149},
          {name: 'Geneva', lat: 46.20692, lng: 6.15061},
          {name: 'Lucerne', lat: 47.04325, lng: 8.30675}]},
     {country: 'Turks & Caicos', cities: [ {name: 'Providenciales', lat: 21.76807, lng: -72.25028}]},
     {country: 'United Kingdom', cities: [ {name: 'London', lat: 51.49753, lng: -0.12223},
          {name: 'Edinburgh', lat: 55.95074, lng: -3.18955}]},
     {country: 'Puerto Rico', cities: [ {name: 'San Juan', lat: 18.4426, lng: -66.08589}]},
     {country: 'New York', cities: [ {name: 'Rochester', lat: 43.15805, lng: -77.59752},
          {name: 'New York City', lat: 40.73257, lng: -73.99712},
          {name: 'Binghamton', lat: 42.1114, lng: -75.92211},
          {name: 'Syracuse', lat: 43.04575, lng: -76.15831},
          {name: 'Schenectady', lat: 42.80844, lng: -73.94457},
          {name: 'Lake Placid', lat: 44.26973, lng: -73.97203},
          {name: 'Fire Island', lat: 40.66529, lng: -73.06884}]},
     {country: 'Vermont', cities: [ {name: 'Stowe', lat: 44.51969, lng: -72.77197}]},
     {country: 'Massachusetts', cities: [ {name: 'Boston', lat: 42.33735, lng: -71.03899},
          {name: 'Provincetown', lat: 42.05012, lng: -70.18811}]},
     {country: 'Connecticut', cities: [ {name: 'New London', lat: 41.3508, lng: -72.10109}]},
     {country: 'New Jersey', cities: [ {name: 'Wildwoods', lat: 38.98316, lng: -74.81405}]},
     {country: 'Pennsylvania', cities: [ {name: 'Philadelphia', lat: 39.97084, lng: -75.14275},
          {name: 'Uniontown', lat: 39.89984, lng: -79.7254},
          {name: 'Lock Haven', lat: 41.13477, lng: -77.43206}]},
     {country: 'Delaware', cities: [ {name: 'Rehoboth', lat: 38.71378, lng: -75.07651}]},
     {country: 'Maryland', cities: [ {name: 'Baltimore', lat: 39.285, lng: -76.61127},
          {name: 'Annapolis', lat: 38.97764, lng: -76.48647},
          {name: 'Assateague', lat: 38.08401, lng: -75.20583}]},
     {country: 'District of Columbia', cities: [ {name: 'Washington', lat: 38.90729, lng: -77.03002}]},
     {country: 'Virginia', cities: [ {name: 'Arlington', lat: 38.8845, lng: -77.11532},
          {name: 'Blacksburg', lat: 37.22858, lng: -80.41481},
          {name: 'Richmond', lat: 37.542, lng: -77.45619},
          {name: 'Warm Springs', lat: 38.04844, lng: -79.78691},
          {name: 'Shenandoah National Park', lat: 38.55139, lng: -78.31578}]},
     {country: 'West Virginia', cities: [ {name: 'New River National Park', lat: 37.87884, lng: -81.01817}]},
     {country: 'Indiana', cities: [ {name: 'Brownstown', lat: 38.87917, lng: -86.04181}]},
     {country: 'Illinois', cities: [ {name: 'Chicago', lat: 41.87802, lng: -87.63271},
          {name: 'Alton', lat: 38.88621, lng: -90.17234},
          {name: 'Prairietown', lat: 38.96653, lng: -89.92209}]},
     {country: 'North Carolina', cities: [ {name: 'Kitty Hawk', lat: 36.06395, lng: -75.70017},
          {name: 'Ocracoke', lat: 35.10931, lng:-75.97768}]},
     {country: 'Georgia', cities: [ {name: 'Saint Simons', lat: 31.17923, lng: -81.40379}]},
     {country: 'Florida', cities: [ {name: 'Tampa', lat: 27.92141, lng: -82.50102},
          {name: 'Orlando', lat: 28.38535, lng: -81.56356},
          {name: 'Palm Beach', lat: 26.70323, lng: -80.06107},
          {name: 'Miami', lat: 25.79043, lng: -80.12887}]},
     {country: 'Alabama', cities: [ {name: 'Huntsville', lat: 34.72029, lng: -86.69138}]},
     {country: 'Louisiana', cities: [ {name: 'New Orleans', lat: 29.9559, lng: -90.08882}]},
     {country: 'Texas', cities: [ {name: 'Austin', lat: 30.24861, lng: -97.75029},
          {name: 'San Antonio', lat: 29.42586, lng: -98.48596}]},
     {country: 'Wisconsin', cities: [ {name: 'Madison', lat: 43.07487, lng: -89.39201}]},
     {country: 'Colorado', cities: [ {name: 'Denver', lat: 39.74713, lng: -104.9878},
          {name: 'Aspen', lat: 39.18816, lng: -106.81886},
          {name: 'Breckenridge', lat: 39.47958, lng: -106.04579}]},
     {country: 'Wyoming', cities: [ {name: 'Jackson', lat: 43.48027, lng: -110.76171}]},
     {country: 'Montana', cities: [ {name: 'Big Sky', lat: 45.28689, lng: -111.39362}]},
     {country: 'Idaho', cities: [ {name: 'Boise', lat: 43.6151, lng: -116.2024},
          {name: 'Salmon-Challis National Forest', lat: 45.28171, lng: -114.19508}]},
     {country: 'Utah', cities: [ {name: 'Park City', lat: 40.6446, lng: -111.49446},
          {name: 'Salt Lake City', lat: 40.76976, lng: -111.88959}]},
     {country: 'Arizona', cities: [ {name: 'Grand Canyon', lat: 36.10817, lng: -112.09491},
          {name: 'Tucson', lat: 32.20209, lng: -110.89621}]},
     {country: 'Nevada', cities: [ {name: 'Las Vegas', lat: 36.15744, lng: -115.16481}]},
     {country: 'California', cities: [ {name: 'San Diego', lat: 32.71261, lng: -117.16739},
          {name: 'Los Angeles', lat: 34.09057, lng: -118.31114},
          {name: 'Monterey', lat: 36.61336, lng: -121.90355},
          {name: 'San Francisco', lat: 37.79349, lng: -122.39537},
          {name: 'Oakland', lat: 37.84923, lng: -122.26384},
          {name: 'Lake Tahoe', lat: 38.93524, lng: -119.99338},
          {name: 'Yosemite National Park', lat: 37.85839, lng: -119.52369}]},
     {country: 'Washington', cities: [ {name: 'Seattle', lat: 47.60935, lng: -122.3403},
          {name: 'Mount Rainer National Park', lat: 46.88417, lng: -121.79324}]},
     {country: 'Alaska', cities: [ {name: 'Ketchikan', lat: 55.35527, lng: -131.68791}]}
   ];
