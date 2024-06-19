import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productImage1 from '../assets/boxe/gantnoir1.png';
import productImage2 from '../assets/boxe/gantred1.png';
import productImage3 from '../assets/boxe/gantgold1.png';
import productImage4 from '../assets/boxe/gantblanc1.png';

AOS.init();

const ProductDetailContainer = styled.div`
  padding: 100px 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 20px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-color: #000;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Inter', sans-serif;
`;

const ProductName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #169ecf;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0a93c4;
  }
`;

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = {
        id: productId,
        name: 'Produit Exemple',
        description: 'Ceci est une description du produit.',
        price: '80€',
        images: [productImage1, productImage2, productImage3, productImage4],
      };
      setProduct(productData);
      setMainImage(productData.images[0]);
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product);
    // Notification de l'ajout au panier (facultatif)
    alert('Produit ajouté au panier !');
  };

  if (!product) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Navbar />
      <ProductDetailContainer>
        <ImageContainer>
          <MainImage src={mainImage} alt={product.name} />
          <ThumbnailContainer>
            {product.images.map((image, index) => (
              <Thumbnail key={index} src={image} alt={`Thumbnail ${index + 1}`} onClick={() => setMainImage(image)} />
            ))}
          </ThumbnailContainer>
        </ImageContainer>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price}</ProductPrice>
          <AddToCartButton onClick={handleAddToCart}>Ajouter au panier</AddToCartButton>
        </ProductInfo>
      </ProductDetailContainer>
      <Footer />
    </>
  );
};

export default ProductDetail;