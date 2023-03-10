export class MongoDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const response = await this.model.find();
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async getById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async create(resource) {
    try {
      const response = this.model.create(resource);
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async update(id, resource) {
    try {
      const response = await this.model.findByIdAndUpdate(id, resource);
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async addOne(id, resource) {
    try {
      // Usar como alternativa en cart.model (*)
      // const carritoElegido = await this.model.findById(id);
      // carritoElegido.productos.push(resource);
      // const response = await this.model.findByIdAndUpdate(id, {
      //   $set: { productos: carritoElegido.productos },
      // });

      const response = await this.model.findByIdAndUpdate(id, {
        $push: { productos: resource },
      });
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async delete(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async removeOne(idCart, idProduct) {
    try {
      const response = await this.model.findByIdAndUpdate(idCart, {
        $pull: { productos: { _id: { $in: [idProduct] } } },
      });
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async updateOne(idCart, idProduct, resource) {
    // En el post enviar el _id del producto sino se cambia automaticamente
    try {
      const response = await this.model.findOneAndUpdate(
        { _id: idCart, "productos._id": idProduct },
        { $set: { "productos.$": resource } },
        {
          new: true,
          runValidators: true,
        }
      );
      return response;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }

  async getOne(idCart, idProduct) {
    try {
      const response = await this.model.findOne({ _id: idCart });
      const respuesta = response.productos.find(
        (product) => product._id == idProduct
      );
      return respuesta;
    } catch (err) {
      throw new Error("Error getting resources");
    }
  }
}
