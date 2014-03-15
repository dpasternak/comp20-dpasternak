comp 20 - MBTA map project
Daniel Pasternak
-------------------------------------------------------------------------------

NOTE: Due to a minor bug, it is often neccesary to refresh the page several
times to get it to load properly. If the nearest station is listed in the blue
box, the page load was successful

-------------------------------------------------------------------------------

What has been correctly implemented and what has not?

correctly implemented:

The map correctly loads and centers on your geolocated position. It also
identifies the nearest subway station on the given line, and gives the distance
to that station. If any of the markers are clicked on, an infowindow containing
a timetable will appear.

incorrectly implemented:
The function that calculates the closest station will occasionally run before
the line is specified. this results in the default value (Station: the moon,
distance: 12400 miles) being displayed.

-------------------------------------------------------------------------------

Collaboration: none

-------------------------------------------------------------------------------

Time Spent: 15 hours
