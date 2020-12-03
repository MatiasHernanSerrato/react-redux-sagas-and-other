const Formatter = {};

Formatter.formatDetailsAndDescription = (detailInfo, includeSoldQuantity, descriptionInfo) => {
    if (!detailInfo) throw new Error('Error formatting data');

    const { id, title, currency_id, price, pictures, condition, shipping, sold_quantity, thumbnail} = detailInfo;
    const { url } = pictures && pictures.length > 0 ?  pictures[pictures.length -1] : { url: thumbnail };

    const formatted =  {
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
        }
    };

    if (includeSoldQuantity) {
        formatted.item.sold_quantity = sold_quantity;
    }

    if (descriptionInfo) {
        formatted.item.description = descriptionInfo.plain_text;
    }

    return formatted;
};


Formatter.formatListItems = (responseItems) => {
    if (!responseItems || !responseItems.results) throw new Error('Error formatting data');

    const reducedData = responseItems.results.reduce((accum, currentItem) => {
        const {category_id} = currentItem;
        accum.categories[category_id] = true;
        accum.items.push(Formatter.formatDetailsAndDescription(currentItem, false).item);
        return accum;
    }, {items: [], categories: {}});


    reducedData.categories = Object.keys(reducedData.categories);
    return reducedData;
};

module.exports = Formatter;