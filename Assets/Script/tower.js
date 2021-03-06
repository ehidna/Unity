﻿#pragma strict

var myProjectile : GameObject;
var reloadTime : float = 1f;
var turnSpeed : float = 5f;
var firePauseTime : float =.25f;
//var muzzleEffect : GameObject;
var errorAmount : float = .001;
var myTarget : Transform;
var muzzlePositions : Transform[];
var turretBall : Transform;
private var nextFireTime : float;
private var nextMoveTime : float;
private var desiredRotation : Quaternion;
private var aimError : float;
private var dusman : GameObject;
private var targetScript : Enemy;
function Start(){
}

function Update(){
	if(myTarget){
		if(Time.time >= nextMoveTime){
			CalculateAimPosition(myTarget.position);
			turretBall.rotation = Quaternion.Lerp(turretBall.rotation, desiredRotation, Time.deltaTime * turnSpeed );
		}	
		if(Time.time >= nextFireTime)
			FireProjectile();
		if(targetScript.health <= 0)
			Destroy(dusman);
	}
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == 'Enemy'){
		nextFireTime = Time.time+(reloadTime * .5);
		myTarget = other.gameObject.transform;
		targetScript = myTarget.GetComponent(Enemy); 
		dusman = other.gameObject;
	}
}
function OnTriggerExit(other : Collider){
	if(other.gameObject.transform == myTarget){
		myTarget = null;
	}
}
function CalculateAimPosition(targetPos : Vector3){
	var aimPoint = targetPos - turretBall.transform.position;
	//var aimPoint = Vector3(targetPos.x - transform.position.x, targetPos.y - transform.position.y , targetPos.z - transform.position.z);
	desiredRotation = Quaternion.LookRotation(aimPoint);
}
function CalculateAimError(){
	aimError = Random.Range(-errorAmount, errorAmount);
}
function FireProjectile(){
	//audio.Play();
	nextFireTime = Time.time + reloadTime;
	nextMoveTime = Time.time + firePauseTime;
	CalculateAimError();
	for(theMuzzlePos in muzzlePositions){
		Instantiate(myProjectile, theMuzzlePos.position, theMuzzlePos.rotation);
//		Instantiate(muzzleEffect, theMuzzlePos.position, theMuzzlePos.rotation);
	}
	targetScript.health -= 1;
}