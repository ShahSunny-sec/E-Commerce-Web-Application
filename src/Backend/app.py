# app.py - Basic Flask backend setup for E-Commerce Web Application

from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample products data
products = [
    {"id": 1, "name": "Product A", "price": "$10"},
    {"id": 2, "name": "Product B", "price": "$15"},
    {"id": 3, "name": "Product C", "price": "$20"}
]

@app.route('/')
def home():
    return "Welcome to the E-Commerce Platform Backend!"

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    
    # Mock authentication check (In a real application, validate credentials with a database)
    if username == "admin" and password == "password":
        return jsonify({"message": "Login successful", "username": username}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)

