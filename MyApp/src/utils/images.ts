import S3Config from './S3Config.js';
import AWS from "aws-sdk";

function getClient() {
    const region = S3Config.Region;
    const bucketName = S3Config.BucketName;
    const accessKeyId = S3Config.AccessKeyId;
    const secretAccessKey = S3Config.SecretAccessKey;

    const s3Client = new AWS.S3({
        region,
        accessKeyId,
        secretAccessKey,
      });

    return s3Client;
}

function doesPhotoExist(type: String, id: String) {
    return new Promise((resolve, reject) => {
        var objectName = type +"-" + id+ ".jpeg";

        var params = {
            Bucket: "smart-grocery-project", 
            Key: objectName
        };

        var client = getClient();
        client.getObject(params, function(err: any, data: any) {
            if (err) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    })
}

function getImageUrl(type: String, id: String): Promise<String>{
    return new Promise((resolve, reject) => {
        var uri = "";
        doesPhotoExist(type, id).then(response => {
                if (response == true) {
                    uri = type + "-" + id+ ".jpeg";
                } else {
                    uri = "default-" + type + ".jpeg";
                }
                resolve("https://smart-grocery-project.s3.us-west-1.amazonaws.com/" + uri);
            }
        )
    })
}

export default getImageUrl;