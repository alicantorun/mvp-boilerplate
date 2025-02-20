'use client';
import { LogoIcon } from './Icons';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-background border-t">
      <div className="container py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Legal Links */}
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact us
            </Link>
            <Link
              href="/imprint"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Imprint
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Fixit/61564623391889/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/fixithw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/fixitgermany/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2025 Fixit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
