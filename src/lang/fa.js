import React from "react";
import ExtendedDropdown from "../components/ExtendedDropdown";
import {Link} from "react-router-dom";
import {Button, DropdownItem, Label, NavLink, UncontrolledTooltip} from "reactstrap";
import UncontrolledTabs from "../components/UncontrolledTabs";

export const FA= {
    "Primary": "اصلی",
    "Success":"سبز",
    "Info":"آبی",
    "Danger":"قرمز",
    "Warning":"نارنجی",
    "Indigo":"بنفش",
    "Purple":"یاسی",
    "Pink":"صورتی",
    "Yellow":"زرد",
    "Light":"روشن",
    "Dark":"تاریک",
    "Color":"رنگی",
    "Reset":"بازنشانی",
    "Options":"گزینه ها",
    "My":"من",
    "Profile":"پروفـایل",
    "Settings":"تنظیمات",
    "Billings":"مالی",
    "Sign Out":"خروج",
    "My Profile":"مشخصات من",
    "Dashboard":"داشبورد",
    "Analytics":"تجزیه و تحلیل",
    "Projects":"پروژه ها",
    "System":"سامانه",
    "Monitor":"پایش",
    "Financial":"مالی",
    "Stock":"موجودی",
    "Reports":"گزارشات",
    "Search":"جستجو",
    "Messages":"پیام ها",
    "Search Messages":"جستجوی پیام ها",
    "Now":"جدید",
    "View All":"مشاهده همه",
    "Activity Feed":"اعلانات",
    "See All Notifications":"مشاهده همه اعلانات",
    "Users":"کاربران",
    "Enter search phrase here":"کلمه مورد نظر را وارد کنید",
    "Back to Home":"بازگشت به خانه",
    "Support":"پشتیبانی",
    "Error 404":"خــطا 404",
    "Page Not Found.":"صفحه مورد نظر یافت نشد.",
    "All Users":"همه کاربران",
    "User Types":"نوع کاربری",
    "manager":"مدیر",
    "teacher":"دبیر",
    "student":"دانش آموز",
    "staff":"کارمند",
    "parent":"اولیا",
    "Newest":"جدیدترین",
    "Family":"نام خـانوادگی",
    "Favorite":"علاقه مندی",
    "Show List":"نمایش لیست",
    "Show Grid":"نمایش کارتی",
    "Add New":"افـزودن",
    "first name and last name":"نام و نام خـانوادگی",
    "Email":"ایمیل",
    "Phone":"شماره تماس",
    "Actions":"عملیات",
    "Call":"تماس",
    "Chat":"گفتـگوآنلاین",
    "Edit":"ویرایش",
    "Delete":"حذف",
    "Add To Favorites":"افزودن به موارد دلخواه",
    "New User":"کاربر جدید",
    "Submit":"ثبت",
    "Cancel":"انصراف",
    "Phone Number":"شماره تماس",
    "phone number must be valid!":"شماره تماس را بدرستی وارد کنید!",
    "National Code":"کد ملــی",
    "National Code must be valid!":"کد ملــی 10 رقمی را بدرستی وارد کنید!",
    "First Name":"نـام",
    "please enter user first name":"لطفاً نام کاربر را وارد کنید!",
    "Last Name":"نام خــانوادگی",
    "please enter user last name!":"لطفاً نام خــانوادگی کاربر را وارد کنید!",
    "Message":"پیامک",
    "Bio":"بیوگرافی",
    "Contact":"راه های ارتباطی",
    "Mobile":"همراه",
    "Fax":"فکـس",
    "Address":"آدرس",
    "City":"شهر",
    "State":"استان",
    "ZIP":"کدپستی",
    "Overview":"بررسی اجمالـی",
    "Detail Contact":"جزئیات تماس",
    "Your message":"پیــام شما",
    "Inbox":"دریافتی",
    "Archive":"آرشیــو",
    PAGINATION_BY_FROM_TO_TOTAL:"نمایش" +
        " {{from}} الی" +
        " {{to}} از" +
        " {{total}} ",
    "From":"از",
    "To":'به',
    "Subject":"موضوع",
    "Date":"تاریخ",
    "Chat with":"گفتگو با",
    "Private Message":"پیام خصوصی",
    "Block this User":"مسدود کردن کاربر",
    "Send":"ارسـال",
    "Enter email(s)":"درج ایمیل(ها)",
    "Add New Files":"افـزودن پیوست",
    "New Email":"ایمیل جدید",
    "Draft":"پیش نویس",
    "Sent":"ارسالی",
    "Trash":"سطل زباله",
    "Labels":"برچسب ها",
    "Add New Label":"افزودن برچسب"
}
