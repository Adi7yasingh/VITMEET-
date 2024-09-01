import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../common/headerSlice";
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import ToogleInput from "../../components/Input/ToogleInput";
// import { API_URL } from "../../utils/constant";
import axios from "axios";
import toast from "react-hot-toast";
// import { storage } from "../../firebase";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React from "react";

