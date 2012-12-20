#pragma strict

var interactableObjects:GameObject[];
var player:GameObject;
var toPickUp:GameObject;
var pointOfIntrest:GameObject;
var locationPointOfInterest:Vector3;
var distance:Vector3;

function Start () {

}

function Update () {
	locationPointOfInterest = pointOfIntrest.transform.position;
	
	if (player.GetDistance(
	
	print(distance.x + ", " + distance.y + ", " + distance.z);
}

function GetDistance(pos1:GameObject, pos2:GameObject)
{
	var pos1Loc:Vector3 = pos1.transform.position;
	var pos2Loc:Vector3 = pos2.transform.position;
	var distance:Vector3 = pos2Loc - pos1Loc;
	
	return distance;
}