import styled from "styled-components";
import React from "react";

export const ProfileContainer = styled.div`
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
`;

export const ProfileSection = styled.div`
    margin-right: 20px;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
    flex: 1;
`;

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 10px;
`;

export const ContactsSection = styled.div`
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1;
`;

export const ContactItem = styled.div`
    margin-bottom: 5px;
`;
