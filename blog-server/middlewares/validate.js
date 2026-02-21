
const validate = (schema) => {
    return (req, res, next) => {

        // validate request body

        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            // Convert Joi errors into key:message
            const errors = {};
            error.details.forEach((d) => (errors[d.path[0]] = d.message));
            return res.status(400).json({ errors });
        }
        next();
    };
};

module.exports = validate