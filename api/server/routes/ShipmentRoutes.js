import { Router } from 'express'
import ShipmentController from '../controllers/ShipmentController'

const router = Router()
router.get('/', ShipmentController.getAllShipments)
router.post('/', ShipmentController.addShipment)
router.get('/:id', ShipmentController.getShipment)
router.put('/:id', ShipmentController.updatedShipment)
router.delete('/:id', ShipmentController.deleteShipment)
export default routers