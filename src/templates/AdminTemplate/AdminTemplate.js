import { UserOutlined } from "@ant-design/icons";
import { PieChartOutline } from "@mui/icons-material";
import { theme } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem(<Link to={"/admin"}>User Management</Link>, "1", <UserOutlined />),
  getItem(
    <Link to={"/admin/location"}>Location Management</Link>,
    "2",
    <PieChartOutline />
  ),
  getItem(
    <Link to={"/admin/rooms"}>Room Management</Link>,
    "3",
    <PieChartOutline />
  ),
  getItem(
    <Link to={"/admin/bookrooms"}>Book Room Management</Link>,
    "4",
    <PieChartOutline />
  ),
];

const AdminTemplate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(getAllLocationAction());
  });

  return <div>AdminTemplate</div>;
};

export default AdminTemplate;
