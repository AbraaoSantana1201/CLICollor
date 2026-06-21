(function () {
    var shopeeUrl = "https://shopee.com.br/clicollor";
    var whatsappBase = "https://wa.me/5511945436737";
    var section = document.getElementById("clicollor-catalogo");
    var grid = document.querySelector(".js-clicollor-bottons-grid");
    var emptyState = document.querySelector(".js-clicollor-empty-state");
    var categoryNavs = document.querySelectorAll(".js-clicollor-catalog-subnav");
    var sidebarTitles = document.querySelectorAll(".js-clicollor-sidebar-title");
    var modal = document.getElementById("product-modal");
    var modalContent = document.querySelector(".js-clicollor-modal-content");
    var mobileMenu = document.getElementById("mobile-menu");
    var mobileBackdrop = document.querySelector(".mobile-menu-backdrop");
    var currentModalProduct = null;

    if (!section || !grid || !emptyState || !categoryNavs.length || !modal || !modalContent) {
        return;
    }

    var imaImages = {
        personalizados: [
            "images/bottons-ima-personalizados-01.jpg",
            "images/bottons-ima-personalizados-02.jpg",
            "images/bottons-ima-personalizados-03.jpg",
            "images/bottons-ima-personalizados-04.jpg"
        ],
        personagens: [
            "images/bottons-ima-personagens-01.jpg",
            "images/bottons-ima-personagens-02.jpg",
            "images/bottons-ima-personagens-03.jpg",
            "images/bottons-ima-personagens-04.jpg"
        ],
        animes: [
            "images/bottons-ima-animes-01.jpg",
            "images/bottons-ima-animes-02.jpg",
            "images/bottons-ima-animes-03.jpg",
            "images/bottons-ima-animes-04.jpg"
        ],
        diversos: [
            "images/bottons-ima-diversos-01.jpg",
            "images/bottons-ima-diversos-02.jpg",
            "images/bottons-ima-diversos-03.jpg"
        ]
    };

    var collections = {
        "bottons-ima": {
            label: "Bottons Imã",
            baseHash: "#bottons-ima",
            emptyText: "Produtos de Bottons Imã em cadastro.",
            categories: [
                { id: "personalizados", label: "Personalizados" },
                { id: "personagens", label: "Personagens" },
                { id: "animes", label: "Animes" },
                { id: "diversos", label: "Diversos" }
            ],
            products: [
                createProduct("ima-personalizado-logo", "personalizados", "Botton Imã Personalizado com logo", 12.90, 0),
                createProduct("ima-personalizado-nome", "personalizados", "Botton Imã Personalizado com nome", 14.90, 1),
                createProduct("ima-personalizado-evento", "personalizados", "Botton Imã Personalizado para evento", 16.90, 2),
                createProduct("ima-personalizado-kit", "personalizados", "Kit Bottons Imã Personalizados", 29.90, 3),
                createProduct("ima-personagem-infantil", "personagens", "Botton Imã Personagem infantil", 12.90, 0),
                createProduct("ima-personagem-mascote", "personagens", "Botton Imã Personagem mascote", 16.90, 1),
                createProduct("ima-personagem-gamer", "personagens", "Botton Imã Personagem gamer", 14.90, 2),
                createProduct("ima-personagem-fantasia", "personagens", "Botton Imã Personagem fantasia", 17.90, 3),
                createProduct("ima-anime-kawaii", "animes", "Botton Imã Anime kawaii", 12.90, 0),
                createProduct("ima-anime-chibi", "animes", "Botton Imã Anime chibi", 13.90, 1),
                createProduct("ima-anime-squad", "animes", "Botton Imã Anime squad", 18.90, 2),
                createProduct("ima-anime-heroi", "animes", "Botton Imã Anime heroi", 15.90, 3),
                createProduct("ima-diverso-colorido", "diversos", "Botton Imã Diverso colorido", 12.90, 0),
                createProduct("ima-diverso-fofo", "diversos", "Botton Imã Diverso fofo", 13.90, 1),
                createProduct("ima-diverso-presente", "diversos", "Botton Imã Diverso presente", 15.90, 2)
            ]
        },
        bottons: {
            label: "Bottons",
            baseHash: "#bottons",
            emptyText: "Produtos de Bottons em cadastro.",
            categories: [
                { id: "personalizados", label: "Personalizados" },
                { id: "animes", label: "Animes" },
                { id: "personagens", label: "Personagens" },
                { id: "desenhos", label: "Desenhos" }
            ],
            products: []
        },
        chaveiros: {
            label: "Chaveiros",
            baseHash: "#chaveiros",
            emptyText: "Produtos de Chaveiros em cadastro.",
            categories: [
                { id: "personalizados", label: "Personalizados" },
                { id: "anime", label: "Anime" },
                { id: "personagens", label: "Personagens" }
            ],
            products: []
        },
        "itens-graficos": {
            label: "Itens Gráficos",
            baseHash: "#itens-graficos",
            emptyText: "Produtos de Itens Gráficos em cadastro.",
            categories: [
                { id: "cartoes-de-visita", label: "Cartões de Visita" },
                { id: "banners", label: "Banners" },
                { id: "panfletos", label: "Panfletos" },
                { id: "flyers", label: "Flyers" }
            ],
            products: [
                {
                    id: "cartoes-visita-personalizados-1000",
                    category: "cartoes-de-visita",
                    name: "Cartões de Visita Personalizados",
                    price: 200,
                    images: [
                        "images/cartao-de-visita/1027.jpg",
                        "images/cartao-de-visita/1235.jpg",
                        "images/cartao-de-visita/1237.jpg",
                        "images/cartao-de-visita/22513.jpg",
                        "images/cartao-de-visita/26129.jpg",
                        "images/cartao-de-visita/5073120.jpg",
                        "images/cartao-de-visita/5123067.jpg",
                        "images/cartao-de-visita/5123468.jpg",
                        "images/cartao-de-visita/688.jpg",
                        "images/cartao-de-visita/sl_052420_31140_22.jpg"
                    ],
                    details: [
                        "1.000 cartões de visita em alta qualidade.",
                        "Criação da arte exclusiva sem custo adicional.",
                        "Design profissional e personalizado para a identidade da sua marca.",
                        "Impressão com excelente acabamento.",
                        "Cause uma ótima primeira impressão e destaque seus contatos de forma moderna e memorável.",
                        "Prazo de criação da arte: até 3 dias úteis.",
                        "Após aprovação da arte, iniciamos a produção."
                    ]
                }
            ]
        },
        "criacao-web": {
            label: "Criação Web",
            baseHash: "#criacao-web",
            emptyText: "Produtos de Criação Web em cadastro.",
            categories: [
                { id: "landing-page", label: "Landing Page" },
                { id: "cardapio-digital", label: "Cardápio digital" }
            ],
            products: []
        }
    };

    function createProduct(id, category, name, price, imageOffset) {
        var categoryImages = imaImages[category] || [];

        return {
            id: id,
            category: category,
            name: name,
            price: price,
            images: [
                categoryImages[imageOffset % categoryImages.length],
                categoryImages[(imageOffset + 1) % categoryImages.length],
                categoryImages[(imageOffset + 2) % categoryImages.length]
            ].filter(Boolean),
            details: [
                "Modelo de Botton Imã para validar foto, nome, valor e descrição antes dos produtos oficiais.",
                "Pode receber arte personalizada, nome, frase ou tema conforme a categoria escolhida.",
                "Acabamento pensado para presentes, lembrancinhas, coleções e ações promocionais."
            ]
        };
    }

    function money(value) {
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function getCollection(id) {
        return collections[id] || collections["bottons-ima"];
    }

    function getCategory(collection, id) {
        return collection.categories.find(function (category) {
            return category.id === id;
        });
    }

    function getProducts(collection, categoryId) {
        if (categoryId === "todos") {
            return collection.products;
        }

        return collection.products.filter(function (product) {
            return product.category === categoryId;
        });
    }

    function getProduct(id) {
        var product = null;

        Object.keys(collections).some(function (collectionId) {
            product = collections[collectionId].products.find(function (item) {
                return item.id === id;
            });
            return !!product;
        });

        return product;
    }

    function hashFor(collectionId, categoryId) {
        var collection = getCollection(collectionId);
        return categoryId && categoryId !== "todos" ? collection.baseHash + "-" + categoryId : collection.baseHash;
    }

    function renderCategoryNavigation(collectionId, collection, activeCategory) {
        var items = [{ id: "todos", label: "Todos" }].concat(collection.categories);
        var html = items.map(function (category) {
            var active = category.id === activeCategory ? " active" : "";
            var ariaCurrent = category.id === activeCategory ? ' aria-current="page"' : "";

            return "" +
                "<li>" +
                    '<a class="subcategory-link js-clicollor-catalog-link' + active + '" href="' + hashFor(collectionId, category.id) + '" data-collection="' + collectionId + '" data-category="' + category.id + '"' + ariaCurrent + ">" +
                        escapeHtml(category.label) +
                    "</a>" +
                "</li>";
        }).join("");

        categoryNavs.forEach(function (nav) {
            nav.innerHTML = html;
        });

        sidebarTitles.forEach(function (title) {
            title.textContent = collection.label;
        });
    }

    function parseHash() {
        var hash = window.location.hash || "";
        var collectionIds = Object.keys(collections).sort(function (a, b) {
            return collections[b].baseHash.length - collections[a].baseHash.length;
        });

        for (var index = 0; index < collectionIds.length; index += 1) {
            var collectionId = collectionIds[index];
            var collection = collections[collectionId];

            if (hash === collection.baseHash) {
                return { collection: collectionId, category: "todos" };
            }

            if (hash.indexOf(collection.baseHash + "-") === 0) {
                return {
                    collection: collectionId,
                    category: hash.slice(collection.baseHash.length + 1)
                };
            }
        }

        return { collection: "bottons-ima", category: "todos" };
    }

    function updatePageTitle(collection, category) {
        var label = category ? collection.label + " - " + category.label : collection.label;
        document.title = label + " em CLICollor";
    }

    function renderCard(product) {
        var dots = product.images.map(function (_, index) {
            return '<span class="card-dot' + (index === 0 ? " active" : "") + '"></span>';
        }).join("");

        return "" +
            '<article class="product-card js-clicollor-product-card" data-product-id="' + product.id + '" data-slide="0">' +
                '<div class="card-gallery">' +
                    '<img src="' + product.images[0] + '" alt="' + escapeHtml(product.name) + '">' +
                    '<button class="card-arrow js-clicollor-gallery-arrow" type="button" data-dir="-1" aria-label="Foto anterior">‹</button>' +
                    '<button class="card-arrow js-clicollor-gallery-arrow" type="button" data-dir="1" aria-label="Próxima foto">›</button>' +
                    '<div class="card-dots">' + dots + "</div>" +
                "</div>" +
                '<div class="card-body">' +
                    '<h2 class="card-title">' + escapeHtml(product.name) + "</h2>" +
                    '<div class="card-price">' + money(product.price) + "</div>" +
                "</div>" +
            "</article>";
    }

    function renderPage(collectionId, categoryId, shouldScroll) {
        var collection = getCollection(collectionId);
        var category = categoryId === "todos" ? null : getCategory(collection, categoryId);
        var safeCategory = category ? category.id : "todos";
        var visibleProducts = getProducts(collection, safeCategory);

        updatePageTitle(collection, category);
        renderCategoryNavigation(collectionId, collection, safeCategory);

        grid.innerHTML = visibleProducts.map(renderCard).join("");
        emptyState.textContent = category ? "Produtos de " + category.label + " em cadastro." : collection.emptyText;
        emptyState.classList.toggle("is-visible", !visibleProducts.length);
        revealProductCards();

        if (shouldScroll) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    function revealProductCards() {
        var cards = grid.querySelectorAll(".product-card");
        var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        cards.forEach(function (card, index) {
            var delay = reduceMotion ? 0 : Math.min(index * 45, 360);
            card.style.setProperty("--reveal-delay", delay + "ms");
        });

        requestAnimationFrame(function () {
            cards.forEach(function (card) {
                card.classList.add("is-visible");
            });
        });

        window.setTimeout(function () {
            cards.forEach(function (card) {
                card.style.setProperty("--reveal-delay", "0ms");
            });
        }, reduceMotion ? 0 : 900);
    }

    function setCardSlide(card, nextIndex) {
        var product = getProduct(card.getAttribute("data-product-id"));

        if (!product || !product.images.length) {
            return;
        }

        var total = product.images.length;
        var index = ((nextIndex % total) + total) % total;
        card.setAttribute("data-slide", index);
        card.querySelector("img").src = product.images[index];
        card.querySelectorAll(".card-dot").forEach(function (dot, dotIndex) {
            dot.classList.toggle("active", dotIndex === index);
        });
    }

    function quoteUrl(product) {
        return whatsappBase + "?text=" + encodeURIComponent("Olá! Quero fazer um orçamento para " + product.name + " da CLICollor.");
    }

    function openProduct(productId) {
        var product = getProduct(productId);

        if (!product) {
            return;
        }

        currentModalProduct = product;
        modalContent.innerHTML = renderModal(product);
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-locked");
        setModalImage(0);
    }

    function renderModal(product) {
        var thumbs = product.images.map(function (image, index) {
            return '<button class="detail-thumb js-clicollor-thumb" type="button" data-index="' + index + '"><img src="' + image + '" alt="' + escapeHtml(product.name) + '"></button>';
        }).join("");
        var details = product.details.map(function (line) {
            return "<li>" + escapeHtml(line) + "</li>";
        }).join("");

        return "" +
            '<button class="modal-close js-clicollor-modal-close" type="button" aria-label="Fechar">×</button>' +
            '<div class="detail-gallery">' +
                '<div class="detail-thumbs">' + thumbs + "</div>" +
                '<div class="detail-main"><img class="js-clicollor-detail-image" src="' + product.images[0] + '" alt="' + escapeHtml(product.name) + '"></div>' +
            "</div>" +
            '<div class="detail-info">' +
                "<h2>" + escapeHtml(product.name) + "</h2>" +
                '<div class="detail-price">' + money(product.price) + "</div>" +
                '<div class="installments">4 x de ' + money(product.price / 4) + " sem juros</div>" +
                '<div class="detail-text"><strong>Detalhes do produto</strong><ul>' + details + "</ul></div>" +
                '<div class="detail-actions">' +
                    '<a class="mini-btn" href="' + shopeeUrl + '" target="_blank" rel="noopener">Comprar</a>' +
                    '<a class="mini-btn whatsapp" href="' + quoteUrl(product) + '" target="_blank" rel="noopener">Orçar via WhatsApp</a>' +
                "</div>" +
            "</div>";
    }

    function setModalImage(index) {
        if (!currentModalProduct) {
            return;
        }

        var image = modal.querySelector(".js-clicollor-detail-image");

        if (image) {
            image.src = currentModalProduct.images[index];
        }

        modal.querySelectorAll(".js-clicollor-thumb").forEach(function (thumb, thumbIndex) {
            thumb.classList.toggle("active", thumbIndex === index);
        });
    }

    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-locked");
        currentModalProduct = null;
    }

    function openMobileMenu() {
        if (!mobileMenu || !mobileBackdrop) {
            return;
        }

        mobileBackdrop.hidden = false;
        mobileMenu.classList.add("is-open");
        mobileMenu.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-locked");
    }

    function closeMobileMenu() {
        if (!mobileMenu || !mobileBackdrop) {
            return;
        }

        mobileMenu.classList.remove("is-open");
        mobileMenu.setAttribute("aria-hidden", "true");
        mobileBackdrop.hidden = true;

        if (!modal.classList.contains("is-open")) {
            document.body.classList.remove("is-locked");
        }
    }

    document.addEventListener("click", function (event) {
        var menuOpen = event.target.closest && event.target.closest("[data-menu-open]");

        if (menuOpen) {
            event.preventDefault();
            openMobileMenu();
            return;
        }

        var menuClose = event.target.closest && event.target.closest("[data-menu-close]");

        if (menuClose) {
            event.preventDefault();
            closeMobileMenu();
            return;
        }

        var catalogLink = event.target.closest && event.target.closest(".js-clicollor-catalog-link");

        if (catalogLink) {
            event.preventDefault();
            var collection = catalogLink.getAttribute("data-collection") || "bottons-ima";
            var category = catalogLink.getAttribute("data-category") || "todos";
            var fromSubnav = !!catalogLink.closest(".catalog-subnav");

            renderPage(collection, category, !fromSubnav);

            if (history.pushState) {
                history.pushState(null, "", hashFor(collection, category));
            }

            closeMobileMenu();
            return;
        }

        var galleryArrow = event.target.closest && event.target.closest(".js-clicollor-gallery-arrow");

        if (galleryArrow) {
            var arrowCard = galleryArrow.closest(".js-clicollor-product-card");
            var currentSlide = parseInt(arrowCard.getAttribute("data-slide"), 10) || 0;
            setCardSlide(arrowCard, currentSlide + parseInt(galleryArrow.getAttribute("data-dir"), 10));
            return;
        }

        var card = event.target.closest && event.target.closest(".js-clicollor-product-card");

        if (card) {
            openProduct(card.getAttribute("data-product-id"));
            return;
        }

        var thumb = event.target.closest && event.target.closest(".js-clicollor-thumb");

        if (thumb) {
            setModalImage(parseInt(thumb.getAttribute("data-index"), 10) || 0);
            return;
        }

        if ((event.target.closest && event.target.closest(".js-clicollor-modal-close")) || event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            if (modal.classList.contains("is-open")) {
                closeModal();
            }

            closeMobileMenu();
        }
    });

    window.addEventListener("hashchange", function () {
        var page = parseHash();
        renderPage(page.collection, page.category, false);
    });

    var initialPage = parseHash();
    renderPage(initialPage.collection, initialPage.category, false);
})();
