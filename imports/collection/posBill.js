export const Pos_Bill = new Mongo.Collection('pos_bill');

Pos_Bill.schema = new SimpleSchema({
    vendorId: {
        type: String,
        label: "Vendor"
    },
    locationId: {
        type: String,
        label: "Location"
    },
    address: {
        type: String,
        label: "Address",
        optional: true
    },
    termId: {
        type: String
    },
    billDate: {
        type: Date
    },
    billDateName: {
        type: String,
        optional: true
    },
    dueDate: {
        type: Date
    },
    billNo: {
        type: String
    },
    note: {
        type: String,
        optional: true
    },

    paid: {
        type: Number,
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    paidUSD: {
        type: Number,
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    paidKHR: {
        type: Number,
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    paidTHB: {
        type: Number,
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    remainUSD: {
        type: Number,
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    remainKHR: {
        type: Number,
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    remainTHB: {
        type: Number,
        decimal: true,
        optional: true,
        defaultValue: 0
    },
    total: {
        type: Number,
        decimal: true
    },
    netTotal: {
        type: Number,
        decimal: true
    },
    status: {
        type: String,
        defaultValue: "Active"
        //    Active
        //    Partial
        //    Complete
    },
    paymentNumber: {
        type: Number,
        optional: true,
        defaultValue: 0
    },
    rolesArea: {
        type: String,
        label: "Role Area"
    },
    item: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    'item.$.itemId': {
        type: String
    },
    'item.$.itemName': {
        type: String
    },
    'item.$.unitId': {
        type: String
    },
    'item.$.unitName': {
        type: String
    },
    'item.$.cost': {
        type: Number,
        decimal: true
    },
    'item.$.qty': {
        type: Number
    },
    'item.$.amount': {
        type: Number,
        decimal: true
    },
    'item.$.desc': {
        type: String,
        decimal: true
    },
    discountType: {
        type: String,
        defaultValue: "Amount"
    },
    discountValue: {
        type: Number,
        decimal: true,
        defaultValue: 0
    },
    discount: {
        type: Number,
        decimal: true,
        defaultValue: 0
    },
    transactionType: {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true,

        autoValue() {
            if (this.isInsert) {
                return moment().toDate();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,

        autoValue() {
            if (this.isUpdate) {
                return moment().toDate();
            }
        }
    },
    createdUser: {
        type: String,
        optional: true,

        autoValue() {
            if (this.isInsert) {
                return Meteor.userId();
            }
        }
    },
    updatedUser: {
        type: String,
        optional: true,

        autoValue() {
            if (this.isUpdate) {
                return Meteor.userId();
            }
        }
    },
    closeDate: {
        type: Date,
        optional: true
    }

});

Pos_Bill.attachSchema(Pos_Bill.schema);