# Use Nginx as the base image
# FROM nginx:alpine

# # Copy the built files to the Nginx server's html directory
# COPY dist/ /usr/share/nginx/html

# # Expose the port that Nginx is running on
# EXPOSE 80

# # Nginx will automatically serve files from /usr/share/nginx/html





# Use the official Nginx image
FROM nginx:alpine

# Copy the build files to the Nginx HTML directory
COPY dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
