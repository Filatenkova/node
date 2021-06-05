const sequelize = require('../db');

// С помощью Datetypes описываются типы полей
const {Datetypes} = require('sequelize');

const User = sequelize.define('user',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: Datetypes.STRING,
        unique: true,
    },
    password: {
        type: Datetypes.STRING,
    },
    role: {
        type: Datetypes.STRING,
        defaultValue: "USER",
    },
});

const Basket = sequelize.define('basket',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

const BasketDevice = sequelize.define('basket_device',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

const Device = sequelize.define('device',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Datetypes.STRING,
        unique: true,
        allowNull: false,
    },
    price: {
        type: Datetypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: Datetypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: Datetypes.STRING,
        allowNull: false,
    },
});

const Type = sequelize.define('type',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Datetypes.STRING,
        unique: true,
        allowNull: false,
    },
});

const Brand = sequelize.define('brand',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Datetypes.STRING,
        unique: true,
        allowNull: false,
    },
});

const Rating = sequelize.define('rating',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rate: {
        type: Datetypes.INTEGER,
        allowNull: false,
    },
});

const DeviceInfo = sequelize.define('device_info',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Datetypes.STRING,
        allowNull: false,
    },
    description: {
        type: Datetypes.STRING,
        allowNull: false,
    },
});

const TypeBrand = sequelize.define('type_brand',{
    id: {
        type: Datetypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

// Экспортируем все описанные сущности и связи
module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}
