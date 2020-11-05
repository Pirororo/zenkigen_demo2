import * as THREE from '../../libs/three.module.js';
import persCamera from '../camera/persCamera.js';
import SeaData from '../objects/SeaData.js';

export class Scene extends THREE.Scene {

    constructor(){

        super();

        //カメラ
        this._persCamera = new persCamera();//thisにする
        this.camera = this._persCamera; //初期値

        //メッシュの海（NIIデータ）
        this._seaData = new SeaData();
        this._seaData.position.z = -1000;
        this._seaData.position.y = 100;
        this._seaData.rotation.y = 0 * Math.PI/180;
        this._seaData.rotation.x = 15 * Math.PI/180;
        this.add(this._seaData);

    }

    update(){

        this._seaData.update();

    }

}