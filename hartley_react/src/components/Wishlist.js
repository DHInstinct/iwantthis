export default function WishList() {
    return (
        <div class="py-12">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    <div class="md:grid md:grid-cols-2 gap-2 ">
                        <div class="col-span-2 p-5">
                            <h1 class="text-xl font-medium ">Wish List</h1>
                            <div class="flex justify-between items-center mt-6 pt-6">
                                <div class="flex items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width="60" class="rounded-full " />
                                    <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">Chicken momo</span> <span class="text-xs font-light text-gray-400">#41551</span> </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="pr-8 flex "> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" /> <span class="font-semibold">+</span> </div>
                                    <div class="pr-8 "> <span class="text-xs font-medium">$10.50</span> </div>
                                    <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center pt-6 mt-6 border-t">
                                <div class="flex items-center"> <img src="https://i.imgur.com/Uv2Yqzo.jpg" width="60" class="rounded-full " />
                                    <div class="flex flex-col ml-3 "> <span class="text-md font-medium w-auto">Spicy Mexican potatoes</span> <span class="text-xs font-light text-gray-400">#66999</span> </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="pr-8 flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" /> <span class="font-semibold">+</span> </div>
                                    <div class="pr-8"> <p class="text-sm font-medium">$10.50</p> </div>
                                    <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                <div class="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" class="rounded-full " />
                                    <div class="flex flex-col ml-3 "> <span class="text-md font-medium">Breakfast</span> <span class="text-xs font-light text-gray-400">#86577</span> </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="pr-8 flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" /> <span class="font-semibold">+</span> </div>
                                    <div class="pr-8"> <span class="text-xs font-medium">$10.50</span> </div>
                                    <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                <div class="flex items-center"> <i class="fa fa-arrow-left text-sm pr-2"></i> <button class="font-medium text-blue-500">Continue Shopping</button> </div>
                                <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span class="text-lg font-bold text-gray-800 "> $24.90</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}