/* 
It should calculate the area of a regular polygon of n sides inside a circle of radius r which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.


Input :: Output Examples

areaOfPolygonInsideCircle(3, 3) // returns 11.691

areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

areaOfPolygonInsideCircle(4, 5) // returns 38.042

*/

function areaOfPolygonInsideCircle(r, n) {
    return (1/2) * n * (r**2) * Math.sin((2*Math.PI)/n);
  }