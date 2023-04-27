import service from "../Services/user.service"

export async function get(req, res, next) {
    try {
        res.json("tyam de day", service.get_service);
    } catch (error) {

    }
}

export default { get };
