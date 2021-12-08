<?php

$trimmedAddress = str_replace(['addr1', 'addr_test1'], ['', ''], cardanoPress()->userProfile()->connectedWallet());
$trimmedAddress = substr($trimmedAddress, 0, 2) . '...' . substr($trimmedAddress, -4);

?>

<div class="flex items-center justify-between pb-6">
    <h2 class="mb-0 mr-2">Welcome <span class="italic"><?php echo cardanoPress()->userProfile()->getData('user_login'); ?></span>!</h2>

    <?php cardanoPress()->template('menu-dropdown', compact('trimmedAddress')); ?>
</div>
