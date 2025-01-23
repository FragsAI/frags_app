import app from "./app";
import logger from "./utils/logger";
import config from "./utils/config";

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}\n`);
});

