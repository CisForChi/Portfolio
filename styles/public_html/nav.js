// $(document).ready(function($) {
//   var is_bouncy_nav_animating = false;

//   $('.bouncy-nav-trigger').on('click', function() {
//     triggerBouncyNav(true);
//   });

//   $('.bouncy-nav-modal .close').on('click', function() {
//     triggerBouncyNav(false);
//   });
//   $('.bouncy-nav-modal').on('click', function(event) {
//     if ($(event.target).is('.bouncy-nav-modal')) {
//       triggerBouncyNav(false);
//     }
//   });

//   function triggerBouncyNav($bool) {

//     if (!is_bouncy_nav_animating) {
//       is_bouncy_nav_animating = true;

//       $('.bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
//         $('.bouncy-nav-modal').toggleClass('is-visible', $bool);
//         if (!$bool) $('.bouncy-nav-modal').removeClass('fade-out');
//         is_bouncy_nav_animating = false;
//       });

//       if ($('.bouncy-nav-trigger').parents('.no-csstransitions').length > 0) {
//         $('.bouncy-nav-modal').toggleClass('is-visible', $bool);
//         is_bouncy_nav_animating = false;
//       }
//     }
//   }
// });