// ------------------------------------------------------- //
// -------------------- DOM Factories -------------------- //
// ------------------------------------------------------- //

export function elFactory(type, attributes, children = []) {
    return { type, attributes, children };
}

export function htmlFactory(obj) {
    const el = document.createElement(obj.type);
    const { attributes } = obj;

    // for (let key in attributes) {
    // 	if (key !== "dataset") {
    // 		el[key] = attributes[key];
    // 	} else {
    // 		// Special directions needed to set "data-" properties
    // 		for (const prop in attributes[key]) {
    // 			el.dataset[prop] = attributes[key][prop];
    // 		}
    // 	}
    // }

    Object.entries(attributes).forEach(({ key, value }) => {
        if (key !== 'dataset') {
            el[key] = value;
        } else {
            // Special directions needed to set "data-" properties
            Object.entries(value).forEach(({ prop, data }) => {
                el.dataset[prop] = data;
            });
        }
    });

    obj.children?.forEach((child) => {
        // Allows for conditionally adding children upstream by
        // setting "" as the alternative to elFactory()
        if (child) {
            el.appendChild(htmlFactory(child));
        }
    });

    return el;
}

// ------------------------------------------------------- //
// -------------------- Other Helpers -------------------- //
// ------------------------------------------------------- //

export function findTaskId(target) {
    return +(target.classList.value.includes('id-bubble-marker')
        ? target.dataset.taskId
        : findTaskId(target.parentElement));
}
