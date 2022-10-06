import { AdapterLogger } from "./adapters/AdapterLogger";
import { AwsLogger } from "./logger/AwsLogger";
import { FileLogger } from "./logger/FileLogger";
import { NotificationService } from "./service/NotificationService";

const fileLogger = new FileLogger();
const notificationServiceFile = new NotificationService(fileLogger);
notificationServiceFile.send('My notification FILE');

const awsLogger = new AwsLogger();
const adapterLogger = new AdapterLogger(awsLogger);
const notificationServiceAws = new NotificationService(adapterLogger);
notificationServiceAws.send('My notification AWS');