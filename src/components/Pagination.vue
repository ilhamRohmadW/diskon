<template>
    <div class="pagination">
        <a href="#" class="pagination-item">
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.44828 6.5C4.29261 6.5 6.51724 4.74775 6.51724 2V0.5H8.68966V2C8.68966 3.99775 7.94174 5.12387 6.51724 6.5H21V9.5H6.51724C7.94174 10.8761 8.68966 12.0023 8.68966 14V15.5H6.51724V14C6.51724 11.2534 4.29261 9.5 1.44828 9.5H0V6.5H1.44828Z" fill="currentColor"/></svg>
        </a>
        <a href="#" class="pagination-item active">1</a>
        <a href="#" class="pagination-item">2</a>
        <a href="#" class="pagination-item">3</a>
        <a href="#" class="pagination-item">4</a>
        <a href="#" class="pagination-item">5</a>
        <a href="#" class="pagination-item">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4828 6.5C17.503 6.5 15.1724 4.74775 15.1724 2V0.5H12.8966V2C12.8966 3.99775 13.6801 5.12387 15.1724 6.5H0V9.5H15.1724C13.6801 10.8761 12.8966 12.0023 12.8966 14V15.5H15.1724V14C15.1724 11.2534 17.503 9.5 20.4828 9.5H22V6.5H20.4828Z" fill="currentColor"/></svg>
        </a>
    </div>
</template>
<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';

    @layer components{
        .pagination{
            @apply flex items-center justify-center gap-2 mt-10;
            .pagination-item{
                @apply size-8 flex items-center justify-center rounded-full transition-colors;
                &.active{
                    @apply bg-black text-white;
                }
                &:hover{
                    @apply bg-black/70 text-white;
                }
            }
        }
    }

</style>