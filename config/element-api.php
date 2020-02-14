<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;
use craft\records\Category;

return [
    'endpoints' => [
        'entries.json' => function() {
            return [
                'elementType' => craft\elements\Entry::class,
                //'criteria' => ['section' => 'Posts'],
                'transformer' => function(Entry $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'url' => $entry->url,
                        'slug' => $entry->slug,
                        'handle' => $entry->type->handle,
                        'content' => $entry->getSerializedFieldValues()
                    ];
                },
            ];
        },
        'entries/<slug:{slug}>.json' => function($slug) {
            return [
                'elementType' => craft\elements\Entry::class,
                'criteria' => [
                    'slug' => $slug
                ],
                'one' => true,
                'transformer' => function(Entry $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'url' => $entry->url,
                        'handle' => $entry->type->handle,
                        'content' => $entry->getSerializedFieldValues()
                    ];
                },
            ];
        },
        'category.json' => function() {
            return [
                'elementType' => craft\elements\Category::class,
                //'criteria' => ['section' => 'Posts'],
                'transformer' => function(craft\elements\Category $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'uri' => $entry->uri,
                        'content' => $entry->getSerializedFieldValues()
                    ];
                },
            ];
        },
        'category/<entryId:\d+>.json' => function($entryId) {
            return [
                'elementType' => craft\elements\Category::class,
                'criteria' => ['id' => $entryId],
                'transformer' => function(craft\elements\Category $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'uri' => $entry->uri,
                        'content' => $entry->getSerializedFieldValues()
                    ];
                },
            ];
        },
        'assets.json' => function() {
            return [
                'elementType' => craft\elements\Asset::class,
                //'criteria' => ['section' => 'Posts'],
                'transformer' => function(craft\elements\Asset $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'path' => $entry->path,
                        //'uri' => $entry->uri,
                        'content' => $entry->getSerializedFieldValues()
                    ];
                },
            ];
        },
        'assets/<entryId:\d+>.json' => function($entryId) {
            return [
                'elementType' => craft\elements\Asset::class,
                'criteria' => ['id' => $entryId],
                'transformer' => function(craft\elements\Asset $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'path' => $entry->path,
                        //'uri' => $entry->uri,
                        'content' => $entry->getSerializedFieldValues()
                    ];
                },
            ];
        },
    ]
];
