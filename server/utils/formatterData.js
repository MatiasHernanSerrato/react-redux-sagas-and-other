module.exports = (detailInfo, descriptionInfo) => {
    if (!detailInfo || !descriptionInfo) throw new Error('Error formatting data');

    const { id, title, currency_id, price, pictures, condition, shipping, sold_quantity } = detailInfo;
    const { url } = pictures[pictures.length -1];

    return {
        item: {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: 0
            },
            picture: url,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity,
            description: descriptionInfo.plain_text
        }
    }
};