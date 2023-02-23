interface IVehicle {
    engineType: String;
    material: String;
    status: String;
    Start(method: 'auto'|'manual'): boolean;
    Break(method: 'auto'|'manual'): boolean;
}

class Vehicles implements IVehicle {
    engineType = '';
    material = '';
    status = '';
    Start (method: 'auto'|'manual') {
        return true;
    }
    Break (method: 'auto'|'manual') {
        return true;
    }
}

