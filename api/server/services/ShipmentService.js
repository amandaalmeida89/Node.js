import database from '../src/models'

class ShipmentService {
  static async getAllShipments() {
    try {
      return await database.Shipment.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addShipment(newShipment) {
    try {
      return await database.Shipment.create(newShipment)
    } catch (error) {
      throw error
    }
  }

  static async updateShipment(id, updateShipment) {
    try {
      const shipmentToUpdate = await database.Shipment.findOne({
        where: { id: Number(id) }
      })

      if (shipmentToUpdate) {
        await database.Shipment.update(updateShipment, { where: { id: Number(id) } })

        return updateShipment
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getShipment(id) {
    try {
      const theShipment = await database.Shipment.findOne({
        where: { id: Number(id) }
      })

      return theShipment
    } catch (error) {
      throw error
    }
  }

  static async deleteShipment(id) {
    try {
      const shipmentToDelete = await database.Shipment.findOne({ where: { id: Number(id) } })

      if (shipmentToDelete) {
        const deletedShipment = await database.Shipment.destroy({
          where: { id: Number(id) }
        })
        return deletedShipment
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ShipmentService