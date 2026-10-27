import React, { useState, useEffect } from "react";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                return response.json();
            })
            .then((data) => {
                setProducts(data.products || []);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Something went wrong");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: "center", padding: "40px" }}>
                <h3>Loading products...</h3>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: "center", padding: "40px", color: "red" }}>
                <h3>{error}</h3>
                <p>Please check your internet connection and API URL.</p>
            </div>
        );
    }

    return (
        <section id="products" style={{ padding: "30px 40px" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
                Our Products
            </h2>

            <p style={{ color: "#64748b", marginBottom: "25px" }}>
                Explore our collection of products.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "25px",
                }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: "1px solid #e2e8f0",
                            borderRadius: "12px",
                            padding: "15px",
                            backgroundColor: "white",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        }}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{
                                width: "100%",
                                height: "160px",
                                objectFit: "contain",
                                borderRadius: "8px",
                            }}
                        />

                        <h3 style={{ fontSize: "17px", marginTop: "15px" }}>
                            {product.title}
                        </h3>

                        <p style={{ color: "#64748b", fontSize: "14px" }}>
                            {product.category}
                        </p>

                        <p
                            style={{
                                color: "#2563eb",
                                fontWeight: "bold",
                                fontSize: "20px",
                            }}
                        >
                            ${product.price}
                        </p>

                        <p style={{ color: "#64748b", fontSize: "14px" }}>
                            ⭐ {product.rating ?? "N/A"}
                        </p>

                        <button
                            onClick={() => alert(`${product.title} selected!`)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "none",
                                borderRadius: "6px",
                                backgroundColor: "#2563eb",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "15px",
                            }}
                        >
                            View Product
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Home() {
    return (
        <div>
            <section
                id="home"
                style={{
                    padding: "55px 40px",
                    backgroundColor: "#eff6ff",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "36px", color: "#1e293b" }}>
                    Welcome to MyWebsite
                </h1>

                <p
                    style={{
                        fontSize: "17px",
                        color: "#64748b",
                        marginTop: "15px",
                    }}
                >
                    Discover amazing products at great prices.
                </p>

                <a
                    href="#products"
                    style={{
                        display: "inline-block",
                        marginTop: "20px",
                        padding: "12px 25px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "8px",
                    }}
                >
                    Explore Products
                </a>
            </section>

            <ProductList />

            <section
                id="about"
                style={{
                    padding: "35px 40px",
                    backgroundColor: "#f8fafc",
                    textAlign: "center",
                }}
            >
                <h2>About Us</h2>
                <p>We make it easy to explore products using React.</p>
            </section>

            <section
                id="contact"
                style={{
                    padding: "35px 40px",
                    textAlign: "center",
                }}
            >
                <h2>Contact Us</h2>
                <p>Email: support@example.com</p>
            </section>
        </div>
    );
}

export default Home;