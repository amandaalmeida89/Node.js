import ShipmentService from '../services/ShipmentService'
import Util from '../utils/Utils'

const util = new Util()

class ShipmentController {
  static async getAllShipments(req, res) {
    try {
      const allShipments = await ShipmentService.getAllShipments()
      if (allShipments.length > 0) {
        util.setSuccess(200, 'Shipments retrieved', allShipments)
      } else {
        util.setSuccess(200, 'No Shipment found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addShipment(req, res) {
    if (!req.body.orders) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    try {
      const createdShipment = await ShipmentService.addShipment(req.body.orders)
      util.setSuccess(201, 'Shipment Added!', createdShipment)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedShipment(req, res) {
    const alteredShipment = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateShipment = await ShipmentService.updateShipment(id, alteredShipment)
      if (!updateShipment) {
        util.setError(404, `Cannot find shipment with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Shipment updated', updateShipment)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getShipment(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theShipment = await ShipmentService.getShipment(id)

      if (!theShipment) {
        util.setError(404, `Cannot find Shipment with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Shipment', theShipment)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteShipment(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const shipmentToDelete = await ShipmentService.deleteShipment(id)

      if (shipmentToDelete) {
        util.setSuccess(200, 'Shipment deleted')
      } else {
        util.setError(404, `Shipment with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default ShipmentController