export function rotateRzRyRx(po, angles){

    var rc = angles.rotateCenter;

    po.x -= rc[0];
    po.y -= rc[1];
    po.z -= rc[2];

    var ry = rotateY(po, angles.y);
    var ryx = rotateX(ry, angles.x);
    var ra = rotateZ(ryx, angles.z);

    ra.x += rc[0];
    ra.y += rc[1];
    ra.z += rc[2];

    return ra;
}

function rotateX(p, a){
    var sa = Math.sin(a);
    var ca = Math.cos(a);
    return {
        x: p.x,
        y: p.y * ca - p.z * sa,
        z: p.y * sa + p.z * ca
    };
}

function rotateY(p, a){
    var sa = Math.sin(a);
    var ca = Math.cos(a);
    return {
        x: p.z * sa + p.x * ca,
        y: p.y,
        z: p.z * ca - p.x * sa
    };
}

function rotateZ(p, a){
    var sa = Math.sin(a);
    var ca = Math.cos(a);
    return {
        x: p.x * ca - p.y * sa,
        y: p.x * sa + p.y * ca,
        z: p.z
    };
}
