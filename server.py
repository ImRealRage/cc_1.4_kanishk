import http.server
import socketserver
import os

# Set the directory to serve files from (current directory)
directory = os.getcwd()

# Set the port for the server
PORT = 8000


# Define the Handler class
class CustomHandler(http.server.SimpleHTTPRequestHandler):
    # Override the default behavior to serve files with CORS headers
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()


# Create a server instance with the custom handler
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print("Serving files at port", PORT)
    # Start serving
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    # Close the server
    httpd.server_close()
    print("Server stopped.")
