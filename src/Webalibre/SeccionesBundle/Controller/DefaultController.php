<?php

namespace Webalibre\SeccionesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function homepageAction()
    {
        return $this->render('WebalibreSeccionesBundle:Default:base.html.twig');
    }
}
