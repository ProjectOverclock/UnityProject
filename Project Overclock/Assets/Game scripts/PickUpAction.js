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
	distance = pointOfIntrest.transform.position - transform.position;
	print(distance.x + ", " + distance.y + ", " + distance.z);
}