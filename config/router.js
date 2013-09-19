/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/


var router = new geddy.RegExpRouter();

router.get('/').to('Main.index');

router.get('/posts').to('Posts.index');
router.get('/posts/add').to('Posts.add');
router.get('/posts/:id').to('Posts.show');
router.get('/posts/:id/edit').to('Posts.edit');
router.post('/posts').to('Posts.create');
router.put('/posts/:id').to('Posts.update');
router.del('/posts/:id').to('Posts.remove');

//router.get('/posts/:id').to('Posts.show');
//router.get('/posts/:id/edit').to('Posts.edit');
//router.post('/posts/create').to('Posts.create');
//router.put('/posts/:id/update').to('Posts.update');
//router.del('/posts/:id/remove').to('Posts.remove');

// Basic routes
// router.match('/moving/pictures/:id', 'GET').to('Moving.pictures');
//
// router.match('/farewells/:farewelltype/kings/:kingid', 'GET').to('Farewells.kings');
//
// Can also match specific HTTP methods only
// router.get('/xandadu').to('Xanadu.specialHandler');
// router.del('/xandadu/:id').to('Xanadu.killItWithFire');
//
// Resource-based routes
// router.resource('hemispheres');
//
// Nested Resource-based routes
// router.resource('hemispheres', function(){
//   this.resource('countries');
//   this.get('/print(.:format)').to('Hemispheres.print');
// });

//router.resource('posts');
exports.router = router;
