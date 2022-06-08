import React from 'react';
import './Explore.css'

export default function Explore() {
  return (
    <div>
      <section className="exp_div py-24">
                <div className="container">
                    <h2 className="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white">
                        <span className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl" style={{
                            backgroundImage: "url(../../../../assets/bg1.gif"}}
                            ></span>
                        Explore All
                    </h2>
                   
                    
                    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_5.jpg" alt="item 5" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">15</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_1.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_1.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">Flourishing Cat #180</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">From 8.49 ETH</span>
                                    <span className="txt_yellow text-jacarta-500">2/8</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_4.jpg" alt="item 4" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">188</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_2.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_2.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">Amazing NFT art</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions2">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">From 5.9 ETH</span>
                                    <span className="txt_yellow text-jacarta-500">1/7</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_7.jpg" alt="item 7" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">160</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_3.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_3.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">SwagFox#133</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions3">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">0.078 ETH</span>
                                    <span className="txt_yellow text-jacarta-500">1/3</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_6.jpg" alt="item 6" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">159</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_4.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_4.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">Splendid Girl</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions4" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions4">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">10 ETH</span>
                                    <span className="txt_yellow text-jacarta-500">2/3</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_8.jpg" alt="item 8" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">32</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_3.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_5.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">Monkeyme#155</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions5" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions5">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">From 5 FLOW</span>
                                    <span className="txt_yellow text-jacarta-500">1/1</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_9.jpg" alt="item 9" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">25</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_6.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_4.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">Jedidia#149</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions6" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions6">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">0.16 ETH</span>
                                    <span className="txt_yellow text-jacarta-500">1/1</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_10.jpg" alt="item 10" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">55</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_2.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_7.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">Artof Eve</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions7" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions7">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">0.13 FLOW</span>
                                    <span className="txt_yellow text-jacarta-500">1/1</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg border_1">
                                <figure className="relative">
                                    <a href="javascript:void(0)">
                                    <img src="item_11.gif" alt="item 11" className="w-full rounded-[0.625rem]" loading="lazy"/>
                                    </a>
                                    <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2">
                                        <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('https://deothemes.com/envato/xhibiter/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4">
                                                <path fill="none" d="M0 0H24V24H0z"></path>
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                            </svg>
                                        </span>
                                        <span className="dark:text-jacarta-200 text-sm">70</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="javascript:void(0)">
                                            <img src="creator_8.png" alt="creator" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Creator: Sussygirl"/>
                                            </a>
                                            <a href="javascript:void(0)">
                                            <img src="owner_5.png" alt="owner" className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white" data-tippy-content="Owner: Sussygirl"/>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="javascript:void(0)">
                                    <span className="font-display txt_black hover:text-accent text-base dark:text-white">Asuna #1649</span>
                                    </a>
                                    <div className="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full">
                                        <a href="javascript:void(0)" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions8" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions8">
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            New bid
                                            </button>
                                            <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"/>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Refresh Metadata
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Share
                                            </button>
                                            <button className="dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white">
                                            Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="txt_black text-jacarta-700 mr-1">0.8 ETH</span>
                                    <span className="txt_yellow text-jacarta-500">1/1</span>
                                </div>
                                <div className="mt-8 flex items-center justify-between">
                                    <button className="text-accent font-display text-sm font-semibold" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                                    Buy now
                                    </button>
                                    <a href="javascript:void(0)" className="group flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                                            <path fill="none" d="M0 0H24V24H0z"></path>
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"></path>
                                        </svg>
                                        <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">View History</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
    </div>
  );
}

