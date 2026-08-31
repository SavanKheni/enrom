"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./productList.css";


export const productCatalogData = [
    {
        category: "Seeds",
        items: [
            "Cumin Seed (Blue Diamond)",
            "Cumin Seed (UK Quality)",
            "Cumin Seed (Europe Quality)",
            "Cumin Seed (Singapore 99%)",
            "Fennel Seed (Blue Diamond)",
            "Fennel Seed (UK Quality)",
            "Fennel Seed (Europe Quality)",
            "Fennel Seed (Singapore 99%)",
            "Mustard Seed (Big, Sortex)",
            "Yellow Mustard Seed (Sortex)",
            "Mustard Seed (Small, Sortex)",
            "Fenugreek Seed (FAQ Sortex)",
            "Dill Seed",
            "Ajwain Seed",
            "Sesame Seed (Natural)",
            "Sesame Seed (Hulled)",
            "Sesame Seed (Black)",
            "Coriander Seed (Parrot)",
            "Coriander Seed (Scooter)",
            "Coriander Seed (Eagle)",
            "Coriander Seed (Split)",
            "Watermelon Seed",
            "Flax Seed",
            "Flax Seed (Roasted)",
            "Green Cardamom",
            "Black Cardamom",
            "Cinnamon Stick / Bark",
            "Cinnamon Quils",
            "Cloves",
            "Star Anise Seed",
            "Mace Whole",
            "Black Pepper",
            "White Pepper",
            "Dry Ginger",
            "Bajri Seed",
        ],
    },
    {
        category: "Powders",
        items: [
            "Chilly Powder (Extra Hot)",
            "Chilly Powder (Kashmiri)",
            "Chilly Powder (Medium)",
            "Chilly Powder (Mild)",
            "Chilly Powder (Coarse)",
            "Chilly Flakes",
            "Chilly Pickle Masala",
            "Curry Powder (Hot)",
            "Curry Powder (Mild)",
            "Garam Masala",
            "Turmeric Powder",
            "Cumin Powder",
            "Coriander Powder",
            "Coriander-Cumin Powder",
            "Amchur Powder",
            "Mace Powder",
            "Ginger Powder",
            "Yellow Mustard Seed Powder",
            "Celery Seed Powder",
            "Kalonji Seed Powder",
            "Fenugreek Seed Powder",
            "Fennel Seed Powder",
            "Flax Seed Powder",
            "Dill Seed Powder",
            "Black Mustard Seed Powder",
            "Black Pepper Powder",
            "White Pepper Powder",
            "Chilly Whole Hot (With/Without Stem)",
            "Chilly Whole Kashmiri (With/Without Stem)",
        ],
    },
    {
        category: "Pulses",
        items: [
            "Toor Dal Polish (Dry)",
            "Toor Dal (Oily)",
            "Yellow Moong Dal",
            "Chana Dal",
            "White Urad Dal Split (Big)",
            "White Urad Dal Whole (Gota)",
            "Green Moong Whole",
            "Green Moong Split",
            "Black Urad Whole",
            "Black Urad Split",
            "Masoor Dal Whole",
            "Masoor Dal Split",
            "Green Peas (Dry)",
            "White Peas (Dry)",
            "White Chole Chana (Kabuli)",
            "Brown Chana",
            "Rajma (Kidney Maroon)",
            "Black Eyed Peas (Choli)",
            "Rice (All Types)",
        ],
    },
    {
        category: "Other Food Stuff",
        items: [
            "Jaggery (Red)",
            "Jaggery (White)",
            "Sugar Crystal",
            "Black Salt",
            "Sindhalu Salt",
            "Himalayan Pink Salt",
            "Poha (Medium)",
            "Poha (Dagdi)",
            "Poha (Naylon)",
            "Mamra",
            "Fryums (All Types)",
            "Soya Chunks (Big)",
            "Soya Chunks (Small)",
            "Papad (All Types)",
            "Cooking Soda",
            "Sabudana (Big)",
            "Sabudana (Small)",
            "Khakhra (All Types)",
            "Pickles (All Types)",
            "Instant Mix (All Types)",
            "Tea",
            "Coffee",
            "Roasted Chana (With Skin, Unsalted)",
            "Roasted Chana (With Skin, Turmeric)",
            "Roasted Chana Daliya (Split)",
            "Roasted Chana Daliya (Whole)",
            "Snacks, Wafers & Biscuits (All Types)",
            "Food Colours & Essence",
            "Pooja Saman Kits",
            "Mukhwas (All Types)",
            "Makhana",
            "Bay Leaves",
            "Kasturi Methi",
            "Dhana Kuria",
            "Methi Kuria",
        ],
    },
    {
        category: "Flours",
        items: [
            "Besan (Fine)",
            "Besan (Coarse)",
            "Bajri Flour",
            "Jowar Flour",
            "Rice Flour",
            "Idli Rava Flour",
            "Corn Flour (White)",
            "Corn Flour (Yellow)",
            "Urad Flour",
            "Ragi Flour",
            "Wheat Flour",
        ],
    },
];

const ProductCatalogSec = () => {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState(
        productCatalogData[0].category
    );
    const [query, setQuery] = useState("");

    const handleSelect = (productName) => {
        router.push(`/contact?product=${encodeURIComponent(productName)}`);
    };

    // When searching, ignore the active tab and search across everything
    const isSearching = query.trim().length > 0;

    const filteredResults = useMemo(() => {
        if (!isSearching) return null;
        const q = query.trim().toLowerCase();
        return productCatalogData
            .map((group) => ({
                category: group.category,
                items: group.items.filter((item) =>
                    item.toLowerCase().includes(q)
                ),
            }))
            .filter((group) => group.items.length > 0);
    }, [query, isSearching]);

    const activeGroup = productCatalogData.find(
        (g) => g.category === activeCategory
    );

    return (
        <section className="catalog_section">
            <div className="container">
                <div className="row">
                    <div className="catalog_header">
                        <h3 className="catalog_title">
                            Our Full <span>Product Range</span>
                        </h3>
                        <p className="catalog_subtitle">
                            50+ spices, seeds, pulses, flours &amp; more — sourced,
                            graded, and export-ready. Search or browse by category
                            below and request a quote for any item.
                        </p>

                        <div className="catalog_search">
                            <input
                                type="text"
                                placeholder="Search products (e.g. cumin, chana dal, besan)..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {!isSearching && (
                    <div className="row">
                        <div className="catalog_tabs">
                            {productCatalogData.map((group) => (
                                <button
                                    key={group.category}
                                    className={`catalog_tab ${activeCategory === group.category ? "active" : ""
                                        }`}
                                    onClick={() => setActiveCategory(group.category)}
                                >
                                    {group.category}
                                    <span className="catalog_tab_count">
                                        {group.items.length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="row">
                    <div className="catalog_body">
                        {isSearching ? (
                            filteredResults.length > 0 ? (
                                filteredResults.map((group) => (
                                    <div key={group.category} className="catalog_group">
                                        <h5 className="catalog_group_title">
                                            {group.category}
                                        </h5>
                                        <div className="catalog_chip_grid">
                                            {group.items.map((item) => (
                                                <button
                                                    key={item}
                                                    className="catalog_chip"
                                                    onClick={() => handleSelect(item)}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="catalog_no_results">
                                    No products match “{query}”. Try another term, or
                                    contact us — we likely still carry it.
                                </p>
                            )
                        ) : (
                            <div className="catalog_chip_grid">
                                {activeGroup.items.map((item) => (
                                    <button
                                        key={item}
                                        className="catalog_chip"
                                        onClick={() => handleSelect(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCatalogSec;