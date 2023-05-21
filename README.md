# Deploying a React App to AWS

🌐 [Website](https://www.awsminiproject.com/)

## Prerequisites

- An AWS account: You will need an AWS account to create and configure the necessary services.
- Node.js and npm: Ensure that you have Node.js and npm installed on your machine to build and deploy the React app.


## Installation
### Step 1: Set up React App
1. Create a new React app: Start by creating a new React app using the create-react-app command. Open your terminal and run the following command:
```sh
npx create-react-app <desired app name>
```
2. Build the app: Navigate to the app directory using cd <desired app name> and build the app using npm run build. This will generate the optimized production build of your React app.

### Step 2: Set up an S3 bucket
1. Create an S3 bucket: Go to the AWS Management Console, search for S3, and create a new bucket with a unique name. Ensure that the bucket is configured to allow public access.
2. Upload the app files: In the S3 bucket, upload all the files and folders from the build directory of your React app.

### Step 3: Set up CloudFront
1. Create a CloudFront distribution: Go to the AWS Management Console, search for CloudFront, and create a new distribution. Set the following configurations:
<br> 1.1 Origin Domain Name: Select your S3 bucket from the dropdown.
<br> 1.2 Viewer Protocol Policy: Redirect HTTP to HTTPS.
<br> 1.3 Alternate Domain Names (CNAMEs): Enter your desired domain or subdomain (in this case [awsminiproject.com](https://www.awsminiproject.com/)).
<br> 1.4 SSL Certificate: Choose "Custom SSL Certificate" and select the certificate from ACM that matches your domain.
2. Update Route53 DNS records: If you haven't already done so, go to the AWS Management Console, search for Route53, and update your DNS records to point to your CloudFront distribution.

### Step 4: Set up ACM (Amazon Certificate Manager)
1. Request a certificate: Go to the AWS Management Console, search for ACM, and request a new certificate for your domain or subdomain. Follow the instructions to validate your ownership of the domain.
2. Associate the certificate with CloudFront: Once the certificate is issued, go back to the CloudFront distribution created in Step 3 and select the newly issued certificate. 

## License
This code is released under the MIT License.
