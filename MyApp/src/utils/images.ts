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

        console.log("in does photo exist" + "type: " + type + "id: " + id)

        var params = {
            Bucket: "smart-grocery-project", 
            Key: objectName
        };

        var client = getClient();
        client.getObject(params, function(err: any, data: any) {
            if (err) {
                console.log("photo does not exist" + "type: " + type + "id: " + id);
                resolve(false);
            }
            else {
                console.log("photo does exist" + "type: " + type + "id: " + id);
                resolve(true);
            }
        });
    })
}

function getImageUrl(type: String, id: String): Promise<String>{
    return new Promise((resolve, reject) => {
        var uri = "";
        console.log("in get image url" + "type: " + type + "id: " + id);
        doesPhotoExist(type, id).then(response => {
                console.log("after does photo exist" + "type: " + type + "id: " + id);
                console.log(response + "type: " + type + "id: " + id);
                if (response == true) {
                    console.log("about to assign URI" + "type: " + type + "id: " + id);
                    uri = type + "-" + id+ ".jpeg";
                } else {
                    uri = "default-" + type + ".jpeg";
                }
                console.log(uri + "type: " + type + "id: " + id)
                resolve("https://smart-grocery-project.s3.us-west-1.amazonaws.com/" + uri);
            }
        )
    })
}

export default getImageUrl;